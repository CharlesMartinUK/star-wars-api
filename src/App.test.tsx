import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const URL = 'https://swapi.dev/api/people/1/'

import App from "./App";


const server = setupServer(
  rest.get( URL , (req, res, ctx) => {
    return res(ctx.json({ name: "Luke Skywalker", height:"172", birth_year:"19BBY", eye_colour:"blue" }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("<App>",  () => {
	
  test("if works stars wars api call works, should say Luke Skywalker", async () => {
     render(<App />);
	 
	 // note find by text does not get partial strings so just searching for luke fails
     expect(await screen.findByText("Name:Luke Skywalker")).toBeInTheDocument()
  });
  
})