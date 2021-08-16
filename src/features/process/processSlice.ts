import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const processSlice = createSlice({
  name: "process",
  initialState: {
    process: {
      id: 1,
      title: "自社の経営課題を投稿し、課題解決のできる企業を探す",
      FirstImg:
        "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process1.png",
      FirstTitle: "貴社の課題を記入して1clickで投稿",
      FirstText: "解決したい課題を記入し、1clickで投稿を送信。",
      SecondImg:
        "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process2.png",
      SecondTitle: "企業から返信が来る",
      SecondText: "企業がアップされている投稿を閲覧し、アドバイスをもらえる。",
      ThirdImg:
        "https://team-link-lp-picture.s3-ap-northeast-1.amazonaws.com/Process/process3.png",
      ThirdTitle: "企業にアプローチ",
      ThirdText: "企業がアップされている投稿を閲覧し、アドバイスをもらえる",
      left: "15%",
    },
  },
  reducers: {
    editProcess(state, action) {
      state.process.id = action.payload.id;
      state.process.title = action.payload.title;
      state.process.FirstImg = action.payload.FirstImg;
      state.process.FirstTitle = action.payload.FirstTitle;
      state.process.FirstText = action.payload.FirstText;
      state.process.SecondImg = action.payload.SecondImg;
      state.process.SecondTitle = action.payload.SecondTitle;
      state.process.SecondText = action.payload.SecondText;
      state.process.ThirdImg = action.payload.ThirdImg;
      state.process.ThirdTitle = action.payload.ThirdTitle;
      state.process.ThirdText = action.payload.ThirdText;
      state.process.left = action.payload.left;
    },
  },
});

export const { editProcess } = processSlice.actions;

export const selectProcess = (state: RootState) => state.process.process;

export default processSlice.reducer;
