import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;

    /*borda arrendodada */
    border-radius: 40px 0px 40px 0px;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const From = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 30px 0px 30px 0px;
        font-size: 16px;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background: #7159c1;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 10px 0px 10px 0px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
