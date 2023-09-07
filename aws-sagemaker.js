function getAWSSagemakerResponse(userInput) {
    const aws_url =
      "https://mhifkgiv6trgxyvv73jci6tcai0mjshr.lambda-url.us-east-1.on.aws/";
  
    fetch(aws_url, {
      method: "POST",
      body: JSON.stringify({
        inputs: [
          [
            { role: "system", content: "You are an expert code developer" },
            { role: "user", content: userInput }, // Make sure to define userInput
          ],
        ],
        parameters: { max_new_tokens: 10000, top_p: 0.9, temperature: 0.2 },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not OK");
        }
        return response.json();
      })
      .then((response) => {
        // Handle the successful response here
        addMessage(response, true, "");
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch or subsequent promise chain
        console.error("An error occurred:", error);
      });
  }