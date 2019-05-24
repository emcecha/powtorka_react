# Dzień 2 &ndash; zadania domowe

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie01.jsx` (potem z kolejnymi numerami zadań), wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

### Zadanie 1

Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div``` z tłem ustawionym na zielony.

Uruchom za pomocą ```setTimeout()``` po 5 sekundach funkcję, która zaktualizuje kolor na czerwony.

### Zadanie 2

Stwórz komponent o nazwie `CardGenerator`. Do `props` przekazuje mu się imię, nazwisko, stanowisko, email i numer telefonu.

**Każda z danych ma być osobnym subkomponentem (np. `CardName`, `CardJobTitle` itp)**.

Powinien on wyświetlać w widoku wizytówki (sam ustal strukturę i style) wszystkie podane dane.

E-mail powinien być klikalny (`<a href="mailto:test@example.com">test@example.com</a>`).
Nr telefonu powinien być klikalny (`<a href="tel:111111111">111111111</a>`).

Wyrenderuj swój komponent na stronie podając w atrybutach do props przykładowe dane.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**

### Zadanie 3

Stwórz komponent o nazwie `RandomNumbers`. Do `props` przyjmuje wartości `min`, `max` i `count`.

Następnie generuje do tablicy tyle liczb pseudolosowych z zakresu `min` i `max` ile podano w `count`.

Komponent powinien wyświetlać w elemencie `div` najpierw informację o zadanym minimum, maksimum i ilości liczb (subkomponent `RandomNumbersInfo`). Następnie wyświetlić za pomocą `join(separator)` wylosowane liczby (subkomponent `RandomNumbersList`).

Wyrenderuj swój komponent na stronie podając w atrybutach do props przykładowe dane.

**Zadanie wykonaj w dwóch wersjach:**
- **Najpierw komponentem w wersji funkcyjnej**
- **Oraz tym samym komponentem w wersji zbudowanej z klasy ES6**