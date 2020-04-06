import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, From, SubmitButton } from './styles';

export default function main() {
    return (
        <Container>
            <h1>
                <FaGithubAlt />
                Repositórios
            </h1>

            <From onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar repositório" />

                <SubmitButton disabled>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </From>
        </Container>
    );
}
