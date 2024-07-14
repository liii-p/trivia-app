async function GetQuestions(request: RequestInfo): Promise<any> {
  const response = await fetch(request);
  let result = await response.json()
  .then((data) => {
    const questionData = {
      ...data.results,
    }
    console.log(questionData);
  })
  return result;
}

export default GetQuestions;
