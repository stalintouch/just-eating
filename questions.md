#### How lond did you spend on the coding test? 
It is difficult to estimate how long I spent working on this add due to various factors. I spend 4 o 5 days very sick, busy with other tasks and apis availablity. Adding the total time worked on this project I would say 3 to 4 days.

Setting up the project, building react components, making API calls, deploying was very straight forward, I would say what took the longest was testing. It took me a lot longer to understand how to test specially with enzyme.

#### what would you add to your solution if you had more time?

I would like to integrate either Just Eat, Foodora or skip the dishes so that users have the ability to order after locating their restaurant.

#### What was the most useful feature that was added to the latest version of your chonse language?

I made heavy use of Async/Await and fetch. It really cuts down the amount of code you need to write and it takes you away from callback hell.

Snippet of code:

// fetches the background images from unsplash, to display them as background
  async componentDidMount() {
    const images = await fetchJSON(imagesUrl);
    this.setState({ backgroundImages: images.results });
  }

  -fetchJSON abstracts away the use of fetch, accepting an optional header object if needed

#### How would you track down a performance issue in production? Have you ever had to do this?
I havent had to worked on anything like this before. But as far as I know there are several tools that help you measure the performance of your app and will indicate where the issues are.

#### How would you improve the API that you just used?

- Availability is a major issue but in general size options on images would be nice to have. I couldnt use the images provided as a background because of sizing I had to use a different API to get high quality images

- Restaurants are somehow limited, there are many US and Canadian cities which there arent restaurants found.

#### Please describe yourself using JSON

myPerson = {
  "hobbies": "Techonology junkie and family, no time left for anything else",
  "passion": "Always learning new things 'techonology being my dedicated area' improve and strive for the best",
  "culture": "very easy going, team player, I have a high degree of respect for coworkers, friends and people in general"
}