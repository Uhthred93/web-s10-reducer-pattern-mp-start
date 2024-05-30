import React,  {useReducer } from 'react' // 👈 you'll need the reducer hook
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

// 👇 these are the types of actions that can change state
const CREATE_QUOTE = 'CREATE_QUOTE'
const DELETE_QUOTE = 'DELETE_QUOTE'
const EDIT_QUOTE_AUTHENTICITY = 'EDIT_QUOTE_AUTHENTICITY' // 👈 toggles the apocryphal property of a single quote
const SET_HIGHLIGHTED_QUOTE = 'SET_HIGHLIGHTED_QUOTE'     // 👈 highlights a quote (or un-highlights it)
const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'             // 👈 toggles whether to show all or only non-apocryphal

let id = 1
const getNextId = () => id++ // 👈 this is a helper to create new quotes
const quotes = [
  {
    id: getNextId(),
    quoteText: "Don't cry because it's over, smile because it happened.",
    authorName: "Dr. Seuss",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "So many books, so little time.",
    authorName: "Frank Zappa",
    apocryphal: false,
  },
  {
    id: getNextId(),
    quoteText: "Be yourself; everyone else is already taken.",
    authorName: "Oscar Wilde",
    apocryphal: false,
  },
]

// 👇 create your initial state object here
const initialState = {
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
  displayAllQuotes: true,
  highlightedQuote: null,
};
const reducer = (state, action) => {
  // 👇 implement your reducer here using the action types above
  switch (action.type) {
    case CREATE_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
      };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote.id !== action.payload),
      };
    case EDIT_QUOTE_AUTHENTICITY:
      return {
        ...state,
        quotes: state.quotes.map(quote => 
          quote.id === action.payload ? { ...quote, apocryphal: !quote.apocryphal } : quote
        ),
      };
    case SET_HIGHLIGHTED_QUOTE:
      return {
        ...state,
        highlightedQuote: action.payload,
      };
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        displayAllQuotes: !state.displayAllQuotes,
      };
      default:
        return state;
  }
};

export default function App() {
  // 👇 use the reducer hook to spin up state and dispatch

  const createQuote = ({ authorName, quoteText }) => {
    // 👇 use the helper function above to create a new quote
    // 👇 and dispatch it over to the reducer
  }
  const deleteQuote = id => {
    // 👇 implement
  }
  const editQuoteAuthenticity = id => {
    // 👇 implement
  }
  const setHighlightedQuote = id => {
    // 👇 implement
  }
  const toggleVisibility = () => {
    // 👇 implement
  }

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes
        quotes={quotes}
      // 👇 lots of props are missing! Check the Quotes component

      />
      <QuoteForm
        createQuote={createQuote}
      />
    </div>
  )
}
