# Niekontrolowane komponenty &ndash; zadania

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

### Podaj hasło (~ 5min - 10min)

Stwórz komponent `GivePassword`. Przyjmuje przez props atrybut `pwd`.

Ma renderować element `div`, a w nim elementy `input type="password"` i `button`.

Po kliknięciu na przycisk pobierz wartość z elementu `input`, jeżeli jest taka sama jak `pwd` z props, to wyświetlaj zamiast `input` i `button` od teraz element `h1` z tekstem "I'm in.".

**Pamiętaj, aby `input` tym razem był w wersji niekontrolowanej. Skorzystaj z atrybutu ref.**

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min)
#### Niekontrolowany input

Stwórz komponent `Sum`.

Ma renderować element `div`, a w nim elementy `input type="number"`, `button`, `ul` oraz `li`.

Po kliknięciu na przycisk pobierz wartość z elementu `input`, dodaj go do listy wyświetlanej w `ul`.

W elemencie `h1` ma się znajdować suma wszystkich dodanych liczb.

Zadanie wykonaj na dwa sposoby:
- Najpierw wykonaj je komponentem niekontrolowanym,
- Następnie spróbuj je wykonać komponentem kontrolowanym.

Jakie widzisz różnice w kodzie, a jakie w działaniu?

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
