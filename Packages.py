import subprocess
import sys

# Lista de paquetes a instalar
packages = [
    "selenium", 
    "webdriver-manager"
]

# Función para instalar paquetes
def install_packages(packages):
    for package in packages:
        print(f"Instalando {package}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# Ejecutar la instalación
if __name__ == "__main__":
    install_packages(packages)
