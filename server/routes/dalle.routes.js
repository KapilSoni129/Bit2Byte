import express from "express";
import * as dotenv from "dotenv";
import Replicate from "replicate";

// import { Configuration, OpenAIApi } from "openai";

// dotenv.config();

// const router = express.Router();

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt);

    // const response = await openai.createImage({
    //   model: "dall-e-1",
    //   prompt: prompt,
    //   n: 1,
    //   size: "1024x1024",
    // });

    // image_url = response.data.data[0].url;

    const replicate = new Replicate();

    const response = await replicate.run(
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
