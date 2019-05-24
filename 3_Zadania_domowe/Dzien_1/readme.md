# Dzień 1 &ndash; zadania domowe

### Zadanie 1

Stwórz w pełni działające środowiko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.

Pamiętaj o:
- ```npm init```
- Zainstalowaniu odpowiednich modułów
- Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie01.jsx` (potem z kolejnymi numerami zadań), wyjściowym zawsze `js/out.js`
**Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad któym obecnie pracujesz w _entry_.**

### Zadanie 2

Po załadowaniu się strony wyświetl użytkownikowi dwa razy ```propmt(text)```, zachęcając do podania imienia i wieku. Odpowiedź przechowuj w zmiennej.

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlało "{imię} ma {wiek} lat" z odpowiednimi danymi.

### Zadanie 3

Stwórz tablicę reprezentującą 5 przykładowych kolorów i przechowaj ją w zmiennej.

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlała lista z wszystkimi kolorami. Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

Przyda Ci się metoda ```join(separator)``` tablicy.

### Zadanie 4

W kodzie stwórz zmienną z dowolnym kolorem (poprawny kolor CSS), np.:

```JavaScript
const color = 'yellow';
```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie napis ze zmiennej napisany w kolorze również z tej zmiennej. Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

### Zadanie 5

W kodzie stwórz zmienną z dowolym rozmiarem (poprawny rozmiar CSS), np.:

```JavaScript
const size = '500px';
```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, z następującym stylem:
- Szerokość: ta ze zmiennej size,
- Wysokość: ta ze zmiennej size,
- Kolor: niebieski.

Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX. Każdorazowa zmiana tej zmiennej powinno zmienić wielkość `div`-a.

### Zadanie 6

W pliku `js/zadanie06.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/zadanie06.jsx` np. za pomocą:

```import person from './zadanie06';```

Stwórz następującą strukturę (postaraj się sam wymyślić jakie to elementy i wybrać podobne style):


 ![Zadanie 6 screen](img/zadanie06_screen.png "Zadanie 6 screen")


Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlały dane tej osoby według struktury podanej powyżej. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku. 