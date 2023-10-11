import requests

def obtener_noticias(api_key):
    news_url = f'https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey={api_key}'
    response = requests.get(news_url)
    data = response.json()

    if data['status'] == 'ok':
        articles = data.get('articles', [])
        for i, article in enumerate(articles):
            print(f'Noticia {i + 1}:')
            print(f'Título: {article["title"]}')
            print(f'Descripción: {article["description"]}')
            print('-' * 30)
    else:
        print('No se pudieron obtener noticias.')

if __name__ == '__main__':
    api_key = '3f6b960efb3a4a4f8297294675877582'  # Reemplaza 'TU_CLAVE_DE_API' con tu clave de API
    obtener_noticias(api_key)
