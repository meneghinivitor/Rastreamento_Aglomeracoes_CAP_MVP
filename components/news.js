// Change YOUR_API_KEY_HERE to your apiKey
const url =
  'https://newsapi.org/v2/everything?language=pt&sortBy=publishedAt&q=covid-19&q=corona&q=pandemia&apiKey=9576c7e7c877426aae443d36058d80bf';

export async function getNews() {
  let result = await fetch(url).then((response) => response.json());
  return result.articles;
}