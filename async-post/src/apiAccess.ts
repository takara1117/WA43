export async function doPost(name: string, comment: string): Promise<string> {
  const postUrl = "https://hal.architshin.com/wa/post2Json.php";
  const formData = new FormData();
  formData.append("name", name);
  formData.append("comment", comment);
  const options = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(postUrl, options);
  const returnJSON = await response.json();
  const returnStr = `お名前: ${returnJSON.name}; コメント: ${returnJSON.comment}`;
  return returnStr;
}
