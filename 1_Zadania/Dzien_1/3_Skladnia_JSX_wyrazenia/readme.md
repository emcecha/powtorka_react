# Wyrażenia &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` (potem z kolejnymi numerami zadań), wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad któym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Dodawanie liczb użytkownika  (~ 10min)

> Do wykonania tego i kolejnych zadań będzie Ci potrzebna funkcja ```prompt(text)```.
> 
> Jest to funkcja wbudowana w przeglądarkę, która wyświetli okienko pozwalające wpisać dowolną wartość użytkownikowi. Funkcja wyświetli informację zawartą w parametrze `text`, kiedy użytkownik wprowadzi i zatwierdzi tekst, funkcja go zwróci.

Po załadowaniu się strony wyświetl użytkownikowi dwa razy ```prompt(text)```, zachęcając do podania liczby A i liczy B. Odpowiedź przechowuj w zmiennej. Nie zapomnij o użyciu ```Number(str)```, aby zmienić wartość typu string w zmienną typu number.

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlał wynik dodawania liczby A i B. Dodawanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

## Zadania do samodzielnego wykonania

### Zadanie 1  (~ 5min - 10min)
####  Wyświetlanie wieku użytkownika

Za pomocą ```prompt()``` przyjmij rok urodzenia użytkownika. Odpowiedź przechowuj w zmiennej. Nie zapomnij o użyciu ```Number(str)```, aby zmienić wartość typu string w zmienną typu number.

Następnie za pomocą metody ```(new Date()).getFullYear()``` pobierz aktualny rok.

Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

### Zadanie 2 (~ 5min - 10min)
#### Wyświetlanie danych z zewnętrznego pliku

W pliku `js/zadanie02.js` znajduje się obiekt reprezentujący osobę. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

```import person from './zadanie02';```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlał tytuł, imię, nazwisko oraz wiek tej osoby. Nazwy tych właściwości obiektu znajdziesz w importowanym pliku.

### Zadanie 3 - Prosty kalkulator (~ 15min - 20min)

Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

Zmodyfikuj zadanie z wykładowcą w ten sposób, aby wyświetlać jeszcze jeden ```prompt()```, który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym jakie zostaną wykonane dla liczb A i B.
 
 Zadanie wykonaj w ten sposób, aby w zależności od operacji był renderowany inny element: dla dodwania element `h1`, dla odejmowania element `h2`, dla mnożenie element `h3`, a dla dzielenia element `h4`. Operacje matematyczne wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

### Zadanie 4  (~ 10min - 15min)
#### Kalkulator modyfikacja

Przerób zadanie 3 w taki sposób, aby powstała funkcja ```calc(a, b, operation)```, która za argumenty przyjmuje liczbę A, B i operację do wykonania jako string, jeden ze znaków: `+`, `-`, `*` lub `/`. Funkcja ta ma zwracać gotowy tag JSX ```h1```..```h4```.

Następnie przerób miejsce w którym korzystasz z ```ReactDOM.render()``` w taki sposób, żeby renderował element ```div```, a w nim bezpośrednio wynik działania funkcji ```calc()```.

### Zadanie 5  (~ 10min - 15min)
#### Wyświetlanie danych z zewnętrznego pliku - zwięrzęta

W pliku `js/zadanie05.js` znajduje się tablica reprezentująca spis zwierząt. Zaimportuj ją do pliku `js/app.jsx` np. za pomocą:

```import animals from './zadanie05';```

Następnie za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlała łączna ilość zwierząt oraz zostaną one wypisane. Wszystkie operacje wykonuj bezpośrednio w wyrażeniu w danym tagu JSX.

Przyda Ci się właściwość ```length``` oraz metoda ```join(separator)``` tablicy.

### Zadanie 6  (~ 5min - 10min)
#### Warunkowe wyświetlanie na podstawie wprowadzonych danych

Przyjmij za pomocą ```prompt()``` informację o wieku użytkownika.

Jeżeli wiek będzie poniżej 18 lat to wyświetl element ```div``` o id `youth`, w przeciwnym wypadku element ```div``` o id `adult`. Wstaw wpisany wiek wewnątrz diva.
