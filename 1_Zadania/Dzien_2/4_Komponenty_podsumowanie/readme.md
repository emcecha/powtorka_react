# Podsumowanie komponentów &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Instalacja React DevTools (~ 10min - 15min)

Zainstalujcie wspólnie i przetestujcie narzędzia deweloperskie Reacta.

## Zadania do samodzielnego wykonania

### Zadanie 1  (~ 10min)
#### React Developer Tool - testowanie

Przejrzyj rozwiązanie zadań z poprzednich działów dzisiejszego dnia. Uruchom je w React Developer Tools - zobacz w jaki sposób jest wyświetlana struktura Twoich komponentów i elementów.

### Zadanie 2  (~ 20min - 25min)
#### Komponent Receipt i props 

Stwórz komponent o nazwie `Receipt`. Niech przyjmuje on w `props` tablicę obiektów z elementami rachunku (`items`).
                                      
Obiekty mają być w takiej formie:

```JavaScript
{
    price   :   cena,
    count   :   ilosc,
    name    :   'nazwa przedmiotu'
}
```

Wyświetl całość w formie takiej tabelki:

Nazwa | Cena / 1 | Ilość | Łączna cena
--- | --- | --- | ---
Masło | 4.00 | 1 | 4.00
Chleb | 3.50 | 2 | 7.00
Jabłka | 2.99 | 1.5 | 4.49
RAZEM | - | - | 15.49 

Pamiętaj o odpowiednich obliczeniach. Na końcu wyświetl całkowitą sumę rachunku.

W pliku `js/zadanie02.js` znajduje się tablica z obiektami przykładowych zakupów. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

```import shopping from './zadanie02';```

Wyrenderuj swój komponent rachunku z tymi zaimportowanymi danymi.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

**Zadanie wykonaj z komponentami w wersji zbudowanej z klas ES6 lub w wersji funkcyjnej (do wyboru)**

### Zadanie 3  (~ 10min - 15min)
#### Komponent Receipt - kompozycja

Jeżeli jeszcze nie masz tego zrobionego, to podziel komponent z zadania 2, tak by składał się z komponentów:
- ReceiptHeader
- ReceiptItems
- ReceiptItem
- ReceiptFooter
- Receipt.

Zastanów się gdzie wykonywać obliczenia i w jaki sposó przekazać je do subkomponentów.

Komponent po takim podziale ma działać :)
