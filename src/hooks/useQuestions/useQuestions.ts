const baseURL = `https://opentdb.com/api.php`;

const useQuestions = async (request?: string) => {
  try {
    const res = await fetch(
      `${baseURL}?amount=10&difficulty=${request}&type=multiple`
    );
    if (res.ok) {
      console.log("Successful.");
    } else {
      console.log("Not successful.");
    }
    return await res.json();
  } catch (err: any) {
    console.log(err.message);
  }
};

export default useQuestions;
