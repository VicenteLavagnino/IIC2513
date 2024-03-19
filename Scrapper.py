from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from Web_driver import WebDriver 

class Scrapper:

    # No modificar
    def __init__(self, web_driver: WebDriver):
        self.web_driver = web_driver

    # COMPLETAR
    # Debe buscar el pokemon en la pagina
    # Recibe el nombre del pokemon y no retorna nada
    def find_pokemon(self, nombre: str) -> None:

        pass

    # COMPLETAR
    # Debe buscar la informacion de cada pokemon en la pagina
    # Recibe una lista de nombres de pokemones y retorna una lista de listas con la informacion de cada pokemon
    def extract_pokemon_info(self, pokemon_list: list[str]) -> list:
        info_pokemons = []
        return info_pokemons
    
    # COMPLETAR
    # Debe ordenar la informacion de los pokemones por peso
    # Recibe una lista de listas con la info de cada pokemon y retorna una lista de listas con la info de cada pokemon ordenada
    def sort_by_weight(self, info: list) -> list:
        info_ordenada = []
        return info_ordenada

    # COMPLETAR
    # Debe escribir la informacion de los pokemones en un archivo csv (Incluyendo el header)
    # Recibe una lista de listas con la info de cada pokemon y no retorna nada
    def write_csv(self, info: list) -> None:
        header = "NOMBRE;TIPOS;CATEGORIA;PESO;ALTURA\n"
        filename = 'pokemons.csv'
        print(f"Se ha creado el archivo {filename}\n")