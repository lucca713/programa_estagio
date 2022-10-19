/*axios.get('http://openlibrary.org/search.json', {
    params: {
     title:'the+lord+of+the+rings' 
    }
  })
  .then(function (response) {
    console.log('DEU BOM')
    console.log(response.data.docs);
  })
  .catch(function (error) {
    console.error(error);
  })*/
 
 /*variaveis para puxar os IDs*/
  let input = document.getElementById('input-books')
  let divBooks = document.getElementById('div-books')

  function eventoChange() {
    /*inicio do axios para consumir a API*/
    axios.get('http://openlibrary.org/search.json', {
    params: {
     title: input.value 
      }
    })
    .then(function (response) { 
      /*for para ele varrer todos os livros*/
      for (const book of response.data.docs) {
        let converLink 
        if (!book.cover_i){

          converLink = `img/not_found.png` /*se o livro não tiver imagem, adcionar imagem de not found*/
       
        }else{
          converLink = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        }
        /*ele pega o titulo que eu digitei tem uma edicao para dexar bonita no site*/
        /*innerHTML para escrever na tela*/
        divBooks.innerHTML += `
          <div class="col-md-3 col-sm-12">
            <img src="${converLink}">
            <div>
              <p><b>Título:</b> ${book.title}</p>
            </div>
            <div>
              <p><b>Autor:</b> ${book.author_name[0]}</p>
            </div>
          </div>
        `
        console.log(book)
      }
    })
    .catch(function (error) {
      console.error(error);
    })

   
  }
  

  
  input.addEventListener('change', eventoChange)/*evento chenge para mudar mesmo se a pessoa clicar fora do botao*/





