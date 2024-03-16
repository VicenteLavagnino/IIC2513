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

    def initialize_driver(self) -> None:
        pass

    def load_page(self, page: str) -> None:
        pass

    def new_tab(self, page: str) -> None:
        pass

    def change_tab(self, page_index: int) -> None: 
        pass
    
    def close_tab(self) -> None:
        pass

    def click_element(self, by: By, value: str) -> None:
        pass
    
    def find_element(self, by: By, value: str) -> SeleniumWebElement:
        pass

    def write_in_element(self, by: By, value: str, text: str) -> None:
        pass

    def get_text(self, by: By, value: str) -> str:
        pass
    
    def get_title(self, by: By, value: str) -> str:
        pass

    def get_url(self) -> str:
        pass
    
    def quit_driver(self) -> None:
        pass