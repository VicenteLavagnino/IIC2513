from Web_driver import WebDriver 
from Scrapper import Scrapper

# No cambiar nombre de la función
def execute_scrapping():

    # Instanciar el driver
    driver = WebDriver()
    driver.initialize_driver()
    driver.load_page('https://www.wikidex.net/wiki/WikiDex')

    # Instanciar el scrapper
    scrapper = Scrapper(driver)

    poke_list = ['Pikachu', 'Charizard', 'Snorlax', 'Gyarados', 'Lugia', 'Eevee', 'Rowlet', 'Greninja', 'Lucario', 'Crobat', 'Kingambit', 'Salandit', 'Entei']

    # testeo
    #poke_list = ['Gyarados', 'Lugia', 'Eevee']

    # Extraer la información de los pokemones
    info_pokemons = scrapper.extract_pokemon_info(poke_list)
    sorted_info = scrapper.sort_by_weight(info_pokemons)
    scrapper.write_csv(sorted_info)

    # Cerrar el driver
    driver.quit_driver()


    print("Fin del programa")

if __name__ == '__main__':
    execute_scrapping()