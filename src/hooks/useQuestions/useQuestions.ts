const baseURL = `https://opentdb.com/api.php`;

const useQuestions = async (request: string) => {
  try {
    const req = await fetch(
      `${baseURL}?amount=1&difficulty=${request}&type=multiple`
    );
    const res = await req.json();
    return res;
  } catch (err: any) {
    console.log(err.message);
  }
};

export default useQuestions;
