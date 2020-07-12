import React, { useEffect, useState } from "react";
import { FiLink, FiSend } from "react-icons/fi";

import api from "../../services/api";

import Header from "../../componets/Header";

import { Container, Field, Repository } from "./styles";

function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [inputError, setinputError] = useState("");
  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = localStorage.getItem("@GitMamute:repositories");

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@GitMamute:repositories",
      JSON.stringify(repositories)
    );
  }, [newRepo, repositories]);

  async function handleAddRepository(event) {
    event.preventDefault();

    if (!newRepo) {
      setinputError("Digite o autor/nome do repositório");
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;
      console.log("repo", repository);

      setRepositories([...repositories, repository]);

      setNewRepo("");
      setinputError("");
    } catch (err) {
      setinputError("Ops...deu erro!");
    }
  }

  return (
    <Container>
      <Header />

      {repositories.map(repository => (
        <Repository key={repository.full_name}>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <p>{repository.full_name}</p>
          <a href={`https://github.com/${repository.full_name}`} target="blank">
            <FiLink />
          </a>
        </Repository>
      ))}

      <Field onSubmit={handleAddRepository}>
        {inputError && <span>{inputError}</span>}

        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Repo..."
        />
        <button type="submit">
          <FiSend />
        </button>
      </Field>
    </Container>
  );
}

export default Main;
