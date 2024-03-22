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

        XPATH_SEARCH = '//*[@id="searchInput"]'
        XPATH_BUTTON = '//*[@id="searchButton"]'
        self.web_driver.driver.find_element(By.XPATH, XPATH_SEARCH).send_keys(nombre)
        self.web_driver.driver.find_element(By.XPATH, XPATH_BUTTON).click()
        pass

    # COMPLETAR
    # Debe buscar la informacion de cada pokemon en la pagina
    # Recibe una lista de nombres de pokemones y retorna una lista de listas con la informacion de cada pokemon
    def extract_pokemon_info(self, pokemon_list: list[str]) -> list:
        info_pokemons = []

        for pokemon in pokemon_list:

            info_poke = []
            
            self.web_driver.write_in_element(By.XPATH, '//*[@id="searchInput"]', pokemon)
            self.web_driver.click_element(By.XPATH, '//*[@id="searchButton"]')

            tipo = self.web_driver.get_title(By.XPATH, '/html/body/div/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div/div[3]/table/tbody/tr[4]/td/a')
            categoria = self.web_driver.get_text(By.XPATH, '/html/body/div/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div/div[3]/table/tbody/tr[3]/td')
            peso = self.web_driver.get_text(By.XPATH, '/html/body/div/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div/div[3]/table/tbody/tr[7]/td')
            altura = self.web_driver.get_text(By.XPATH, '/html/body/div/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/div/div[3]/table/tbody/tr[8]/td')

            info_poke = [pokemon, tipo, categoria, float(peso[:-2]), float(altura[:-1])]
            info_pokemons.append(info_poke)
            pass

        return info_pokemons
    
    # COMPLETAR
    # Debe ordenar la informacion de los pokemones por peso
    # Recibe una lista de listas con la info de cada pokemon y retorna una lista de listas con la info de cada pokemon ordenada
    def sort_by_weight(self, info: list) -> list:
        info_ordenada = []

        # Ordenar según peso de manera descendente
        info_ordenada = sorted(info, key=lambda x: x[3], reverse=True)

        return info_ordenada

    # COMPLETAR
    # Debe escribir la informacion de los pokemones en un archivo csv (Incluyendo el header)
    # Recibe una lista de listas con la info de cada pokemon y no retorna nada
    def write_csv(self, info: list) -> None:
        header = "NOMBRE;TIPOS;CATEGORIA;PESO;ALTURA\n"
        filename = 'pokemons.csv'

        with open(filename, 'w') as file:
            file.write(header)
            for pokemon in info:
                file.write(f"{pokemon[0]};{pokemon[1]};{pokemon[2]};{pokemon[3]};{pokemon[4]}\n")
                pass
            pass

        print(f"Se ha creado el archivo {filename}\n")
        pass