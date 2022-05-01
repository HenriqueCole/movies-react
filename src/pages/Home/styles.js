import styled from 'styled-components';


export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
`

export const Movie = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;


        img{
            width: 200px;
            border-radius: 1rem;
            margin-bottom: 1rem;
        }

        span{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
            font-weight: bold;
            font-size: 1.5rem;
            text-align: center;
        }

        a{
            transition: 0.2s;
        }

        a:hover{
            transform: scale(1.1);
        }

`