from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from Web_driver import WebDriver 

class Scrapper:

    # No modificar
    def __init__(self, web_driver: WebDriver):
        self.web_driver = web_driver

    def find_pokemon(self, nombre: str) -> None:
        pass

    def extract_pokemon_info(self, pokemon_list: list[str]) -> list:
        info_pokemons = []
        return info_pokemons
    
    def sort_by_weight(self, info: list) -> list:
        info_ordenada = []
        return info_ordenada

    def write_csv(self, info: list) -> None:
        header = "NOMBRE;TIPOS;CATEGORIA;PESO;ALTURA\n"
        filename = 'pokemons.csv'
        print(f"Se ha creado el archivo {filename}\n")