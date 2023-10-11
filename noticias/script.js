
        async function obtenerNoticias() {
            const apiKey = '3f6b960efb3a4a4f8297294675877582'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API
            const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=3f6b960efb3a4a4f8297294675877582`;

            try {
                const response = await fetch(newsUrl);
                const data = await response.json();

                if (data.status === 'ok') {
                    const articles = data.articles;
                    const newsContainer = document.getElementById('news-container');

                    articles.forEach((article, index) => {
                        const newsCard = document.createElement('div');
                        newsCard.classList.add('news-card');

                        const image = document.createElement('img');
                        image.classList.add('news-image');
                        image.src = article.urlToImage;

                        const textContainer = document.createElement('div');
                        textContainer.classList.add('news-text');

                        const title = document.createElement('div');
                        title.classList.add('news-title');
                        title.innerText = article.title;

                        const description = document.createElement('div');
                        description.classList.add('news-description');
                        description.innerText = article.description;

                        textContainer.appendChild(title);
                        textContainer.appendChild(description);

                        newsCard.appendChild(image);
                        newsCard.appendChild(textContainer);
                        newsContainer.appendChild(newsCard);

                        // Limitar a 6 noticias
                        if (index === 5) {
                            return;
                        }
                    });
                } else {
                    console.error('No se pudieron obtener noticias.');
                }
            } catch (error) {
                console.error('Error en la solicitud de noticias:', error);
            }
        }

        obtenerNoticias();
