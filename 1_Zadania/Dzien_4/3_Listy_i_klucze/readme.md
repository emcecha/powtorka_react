# Listy i klucze &ndash; zadania

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

### Lista osób (~ 10min)

Stwórz komponent `PeopleList`.

W pliku `js/zadanie00.js` znajduje się tablica osób. Zajrzyj do pliku lub po jego imporcie wykonaj na tablicy `console.log()`, żeby podejrzeć jakie dane przechowuje. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

```import people from './zadanie00';```

Komponent ma wyświetlić element `ul`, a w nim listę osób z elementami `li`, w których tekstem będzie imię i nazwisko osoby. **Pamiętaj o wybraniu odpowiedniego klucza.**

Wyrenderuj i przetestuj swój komponent. Spójrz do konsoli i upewnij się, że nie ma żadnych błędów.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min)
#### Tworzenie elementów li

Stwórz komponent `PeopleList2`.

W pliku `js/zadanie01.js` znajduje się tablica osób. Zajrzyj do pliku lub po jego imporcie wykonaj na tablicy `console.log()`, żeby podejrzeć jakie dane przechowuje. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

```import people from './zadanie01';```

Komponent ma wyświetlić element `div`, w nim element `ul`, a w nim listę osób z elementami `li`, w których tekstem będzie imię i nazwisko osoby. **Pamiętaj o wybraniu odpowiedniego klucza.**

Stwórz również w elemencie `div` przycisk `button`, który odwraca tablicę z osobami (przechowuj ją więc w state). Użyj do tego metody ```array.reverse()```.

Wyrenderuj i przetestuj swój komponent. Spójrz do konsoli i upewnij się, że nie ma żadnych błędów.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2 (~ 15min)
#### Tworzenie elementów li, dodawanie nowych elementów

Stwórz komponent `Invites`.

Komponent ma zawierać `ul` z listą osób (na początku pustą) oraz przycisk `Nowy`. **Pamiętaj o wybraniu odpowiedniego klucza.**

Po kliknięciu na przycisk ma się pojawić `prompt()` z prośbą o podanie imienia i nazwiska. Jeżeli jeszcze taka osoba nie istnieje na liście to zostaje dodana **na jej początku**.

Wyrenderuj i przetestuj swój komponent. Spójrz do React Developer Tools i sprawdź, czy w odpowiedni sposób są uaktualniane elementy Twojego komponentu (powinien zmieniać się tylko ten dodawany, nie kolejne).

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 3 (~ 15min)
#### Przekzywanie informacji do funkcji eventu

> Do wykonania tego zadania będziesz potrzebował/a przekazywać w evencie pewną własną unikalną informację.
> Wystarczy zrobić to w wyrażeniu JSX bezpośrednio podczas tworzenia elementu. 
> Zobacz na przykładzie jak możesz to zrobić:
> ```JSX
> const buttons = infos.map(info => {
>     return <button onClick={e => this.handleClick( e, info.id );}/>;
> });
> ```

Stwórz komponent `Switch`. Ma on przyjmować w props liczbę `count`.

Następnie stwórz taką ilość elementów `li` jaka jest liczba `count`. **Pamiętaj o wybraniu odpowiedniego klucza.** W elementach `li` mają znajdować się elementy `button` z tekstem ustawionym na kolejny numer: 1, 2, 3 itd.

Po kliknięciu na przycisk, ma stać się on zablokowany, ale tylko on, cała reszta wraca do klikalnego stanu.

Wyrenderuj i przetestuj swój komponent.

> Masz problem z tym zadaniem? Przeczytaj wskazówkę:
> W taki prosty sposób możesz wygenerować wiele elementów zmieniając część z nich:
> ```JSX
> const spans = smths.map(smth => {
>     return <span contentEditable={ smth.state === 'edit' ? true : false }>;
> });
> ```

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
