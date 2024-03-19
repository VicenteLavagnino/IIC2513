from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.remote.webelement import WebElement as SeleniumWebElement
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from time import sleep


class WebDriver:

    # No modificar
    def __init__(self):
        self.active_tab = 0
        self.driver = None
        self.tabs = []

    # COMPLETAR
    # Deberas utilizar la libreria webdriver para instanciar el driver y los tabs
    # No tiene atributos, no retorna nada
    def initialize_driver(self) -> None:
        # Instanciar el driver
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        sleep(3) # Esperar a que cargue el driver
        # Instanciar tabs
        self.tabs = [self.driver.current_window_handle]
        pass

    # COMPLETAR
    # Funcion para cargar una pagina
    # Recibe un str, no retorna nada
    def load_page(self, page: str) -> None:
        # Cargar la pagina
        self.driver.get(page)
        sleep(3) # Esperar a que cargue la pagina 
        pass

    # COMPLETAR
    # Funcion para abrir una nueva pestana, agregar un tab y actualizar el active_tab
    # Recibe un str, no retorna nada
    def new_tab(self, page: str) -> None:
        
        self.driver.execute_script("window.open('');")
        sleep(1) # Esperar a que cargue la pagina
        # Agregar el tab
        self.driver.switch_to.window(self.driver.window_handles[-1]) # Cambiar a la nueva pestaña
        self.tabs.append(self.driver.window_handles[-1]) # Agregar la nueva pestaña a la lista de tabs
        self.active_tab = len(self.tabs) - 1 # Actualizar el active_tab
        self.load_page(page)

        pass

    # COMPLETAR
    # Funcion que actualiza el atributo active_tab y cambia de pestana del driver
    # En caso que no queden pestanas, se debe resetar el driver
    # Recibe un int, no retorna nada
    def change_tab(self, page_index: int) -> None: 

        self.driver.switch_to.window(self.tabs[page_index]) # Cambiar a la pestaña seleccionada
        self.active_tab = page_index # Actualizar el active_tab
        pass
    
    # COMPLETAR
    # Funcion para cerrar una pestana, debe actualizar los atributos
    # No recibe ni retorna nada
    def close_tab(self) -> None:

        self.driver.close() # Cerrar la pestaña
        del self.tabs[self.active_tab] # Eliminar la pestaña de la lista de tabs

        if len(self.tabs) == 0:
            self.quit_driver() # Si no quedan pestañas, cerrar el driver

        else:
            self.active_tab = len(self.tabs) - 1
            self.driver.switch_to.window(self.tabs[self.active_tab]) # Cambiar a la pestaña activa

        pass

    # COMPLETAR
    # Funcion para hacer click en un elemento
    # Recibe el tipo de busqueda y el valor, y hace click en el elemento. No retorna nada
    def click_element(self, by: By, value: str) -> None:
        pass
    
    # COMPLETAR
    # Funcion para encontrar un elemento
    # Recibe el tipo de busqueda y el valor, y retorna el elemento
    def find_element(self, by: By, value: str) -> SeleniumWebElement:
        pass

    # COMPLETAR
    # Funcion para escribir en un elemento
    # Recibe el tipo de busqueda, el valor y el texto a escribir, y escribe el texto en el elemento
    def write_in_element(self, by: By, value: str, text: str) -> None:
        pass

    # COMPLETAR
    # Funcion para extraer texto
    # Recibe el tipo de busqueda y el valor, y retorna el texto del elemento
    def get_text(self, by: By, value: str) -> str:
        pass
    
    # COMPLETAR
    # Funcion para extraer atributo title
    # Recibe el tipo de busqueda y el valor, y retorna el atributo title del elemento
    def get_title(self, by: By, value: str) -> str:
        pass

    # COMPLETAR
    # Funcion para extraer url
    # Retorna la url de la pagina actual
    def get_url(self) -> str:
        pass
    
    # COMPLETAR
    # Funcion para cerrar el driver
    # Cierra el driver y resetea el atributo a None
    def quit_driver(self) -> None:
        pass

    # Fuentes: 
    # https://www.youtube.com/watch?v=Zauls_kTjYM
    # https://towardsdatascience.com/how-to-use-selenium-to-web-scrape-with-example-80f9b23a843a 
