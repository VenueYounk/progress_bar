import sys
from PyQt5 import QtGui, QtCore
from PyQt5.QtCore    import QUrl , Qt 
from PyQt5.QtWidgets import QMainWindow, QApplication , QDesktopWidget
from PyQt5.QtWebEngineWidgets import QWebEngineView
import os

current_dir = os.getcwd().replace("\\", "/")
print(current_dir)



class MainWindow(QMainWindow):
    def __init__(self ):
        super(QMainWindow, self).__init__()
        self.setWindowTitle('Пример загрузки и отображения локальной страницы')

        self.browser = QWebEngineView()  

        # Загрузка локальной страницы
        # Полный путь к index.html
        url = current_dir + '/index.html'
        self.browser.load(QUrl( url ))  
        self.setCentralWidget(self.browser)
        self.setWindowFlags(QtCore.Qt.FramelessWindowHint)
    

    def location_on_the_screen(self):
        ag = QDesktopWidget().availableGeometry()
        sg = QDesktopWidget().screenGeometry()

        widget = self.geometry()
        x = ag.width() - widget.width()
        y = 2 * ag.height() - sg.height() - widget.height()
        self.move(x, y)


if __name__ == '__main__':
    app = QApplication(sys.argv)       
    win = MainWindow()
    win.location_on_the_screen()
    win.show()
    sys.exit(app.exec_())

print("Программа выполнилась успешно")
input("Нажмите любую клавишу для выхода")