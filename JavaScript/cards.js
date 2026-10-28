const usuarios = [
      {
        id: 1,
        name: "Leanne Graham",
        email: "Sincere@april.biz",
        address: { city: "Gwenborough" },
        company: { name: "Romaguera-Crona" }
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        address: { city: "Wisokyburgh" },
        company: { name: "Deckow-Crist" }
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        address: { city: "McKenziehaven" },
        company: { name: "Romaguera-Jacobson" }
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        email: "Julianne.OConnor@kory.org",
        address: { city: "South Elvis" },
        company: { name: "Robel-Corkery" }
      }
    ];

    const biblio = document.getElementById("cards");

    usuarios.forEach(usuario,,)=>{
        const cardss = document.createElement("div");
        cardss.className= "Card";

        const nome = document.createElement("p");
        nome.textContent = "nome: " + usuarios.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + usuario.email;

        const cidade = document.createElement("p");
        cidade.textContent = "Cidade: " + usuarios.address.city;

        const empresa = document.createElement("p");
        empresa.textContent = "Empresa: " + usuarios.address.company;

        
        cardss.appendChild(nome);
        cardss.appendChild(email);
        cardss.appendChild(cidade);
        cardss.appendChild(empresa);

        biblio.appendChild(cardss);

    }



    document.getElementById("total").textContent =
      "Total de usuarios: " + usuarios.length;