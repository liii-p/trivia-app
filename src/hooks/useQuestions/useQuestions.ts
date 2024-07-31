const baseURL = `https://opentdb.com/api.php`;

const useQuestions = async (request: string) => {
  try {
    const req = await fetch(
      `${baseURL}?amount=1&difficulty=${request}&type=multiple`
    );
    console.log("Use questions request:", req);
    return await req.json();
  } catch (err: any) {
    console.log(err.message);
  }
};

export default useQuestions;
