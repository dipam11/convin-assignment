import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardObj: {
    "Educational Videos": [
      {
        id: "1",
        name: "Java TutoriaL",
        category: "Educational Video",
        url: "https://www.youtube.com/embed/UmnCZ7-9yDY",
      },
      {
        id: "2",
        name: "UI/UX Tutorial",
        category: "Educational Video",
        url: "https://www.youtube.com/embed/Cn2KgB_01mE",
      },
      {
        id: "3",
        name: "SQL Tutorial",
        category: "Educational Video",
        url: "https://www.youtube.com/embed/p3qvj9hO_Bo",
      },
    ],
    "Gaming Videos": [
      {
        id: "4",
        name: "Gekko Agent Trailer - VALORANT",
        category: "Gaming Video",
        url: "https://www.youtube.com/embed/iYFh_XAXSPk",
      },
    ],
    "Comedy Video": [
      {
        id: "5",
        name: "Pyaar Ka Attyachaar - Ek Love Story",
        category: "Stand Up Video",
        url: "https://www.youtube.com/embed/AlNmcoavE1Y",
      },
    ],
  },
  activeCategory: "Educational Videos",
  history: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = { ...action.payload, id: Math.random() * 100000 };
      const newObj = { ...state.cardObj };
      if (!Object.keys(state.cardObj).includes(newCard.category)) {
        newObj[newCard.category] = [];
      }
      newObj[newCard.category].push(newCard);
      state.cardObj = { ...newObj };
    },
    deleteCard: (state, action) => {
      const card = action.payload;
      const newObj = { ...state.cardObj };
      const arr = newObj[card.category];
      const newArr = arr.filter((val) => val.id !== card.id);
      newObj[card.category] = newArr;
      state.cardObj = newObj;
    },
    editCard: (state, action) => {
      const { oldCard, newCard } = action.payload;
      if (oldCard.category === newCard.category) {
        const newObj = { ...state.cardObj };
        const arr = newObj[oldCard.category];
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === oldCard.id) index = i;
        }
        arr[index] = {
          ...newCard,
          id: arr[index].id,
        };
        newObj[oldCard.category] = arr;
        state.cardObj = newObj;
      } else {
        let newObj = { ...state.cardObj };
        const arr = newObj[oldCard.category];
        const newArr = arr.filter((val) => val.id !== oldCard.id);
        newObj[oldCard.category] = newArr;
        state.cardObj = newObj;
        newCard["id"] = oldCard.id;
        newObj = { ...state.cardObj };
        if (!Object.keys(state.cardObj).includes(newCard.category)) {
          newObj[newCard.category] = [];
        }
        newObj[newCard.category].push(newCard);
        state.cardObj = { ...newObj };
      }
    },

    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    addToHistory(state, action) {
      state.history = [action.payload, ...state.history];
    },
  },
});

// Action creators are generated for each case reducer function
export const cardActions = { ...cardSlice.actions };

export default cardSlice.reducer;
