async function searchBooksByName(bookName) {
    const apiKey = 'AIzaSyChPpLNSPR-fAxXZIIXTnp3Tzt4gYiEU_c'; // Coloque sua chave de API aqui
  
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${apiKey}`);
      const books = response.data.items;
      // Faça algo com os dados dos livros, como exibir no console ou processar mais adiante
      console.log(books);
    } catch (error) {
      console.error(error);
    }
  }
  