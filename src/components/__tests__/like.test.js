// Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
// Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
// Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.

import {render, screen, fireEvent} from '@testing-library/react'
import Like from "../like";

test("likes start at 0", () => {
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("likes increases", () => {
    render(<Like/>);
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})

test("likes decreases", () => {
    render(<Like/>);
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})