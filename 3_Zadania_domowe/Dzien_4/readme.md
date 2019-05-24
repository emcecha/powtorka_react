# Dzień 4 &ndash; zadania domowe

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

> Do wykonania tego zadania możesz potrzebować przekazywać w evencie pewną własną unikalną informację.
> Wystarczy zrobić to w wyrażeniu JSX bezpośrednio podczas tworzenia elementu. 
> Zobacz na przykładzie jak możesz to zrobić:
> ```JSX
>     <button onClick={e => this.handleClick( e, index );}/>
> ```

Stwórz komponent z 15 przyciskami z napisem "Klik!". Wykorzystaj do tego pętlę i `array.map()`.

Po kliknięciu na dowolny przycisk zmienia on (**ten konkretnie wciśnięty**) swój tekst na "Kliknięty.".

Przemyśl w jaki sposób określić, który przycisk został kliknięty.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2

Stwórz komponent `ProductTriangle`. Ma się on składać z trzech przycisków:
- "Dobrze",
- "Szybko",
- "Tanio".

Wszystkie przyciski mają być domyślnie szare.

Po kliknięciu na dowolny z przycisków zmienia on się na zielony.

**Uwaga:** jeżeli zaznaczone są na zielono już dwa przyciski i zaznaczany jest trzeci, to ten który został zaznaczony jako najstarszy (pierwszy w kolejności) powinien się odznaczyć.

Dla przykładu:
- Klikamy "Dobrze", jest zaznaczone: Dobrze,
- Klikamy "Szybko", jest zaznaczone: Dobrze i Szybko,
- Klikamy "Tanio", jest zaznaczone: Szybko i Tanio (odznaczono Dobrze),
- Klikamy "Dobrze", jest zaznaczone: Tanio i Dobrze (odznaczono Szybko).

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 3

Stwórz komponent o nazwie `PESELInput`.
Ma on wyświetlać w elemencie `div` elementy `input` oraz drugi `div`.

`input` ma być kontrolowanym elementem formularza. Podczas wpisywania sprawdzaj, czy wpisany tekst ma 11 znaków i:
- Jeżeli tak, to w wewnętrznym elemencie `div` wyświetl `input type="submit"` z napisem "Prześlij" (póki co nie ma nic robić);
- Jeżeli nie, to w wewnętrznym elemencie `div` wyświetl informację "Niepoprawny numer PESEL".

Wykonaj zadanie pozsając wszystkie poznane techniki:
- Bezpośrednio wewnątrz JSX operator trójargumentowy;
- Bezpośrednio wewnątrz JSX warunek `if`;
- `if` poza JSX (zapamiętywanie w zmiennej co wyświetlić).

Jaki sposób wydaje Ci się najczytelniejszy? Czy któryś coś wymusił?

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 4

Stwórz komponent `AdultStuff` oraz `AdultStuffBox`.

Komponent `AdultStuff` renderuje w elemencie `div` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim swój wiek.

Renderuje również komponent `AdultStuffBox`, przekazując mu przez `props` atrybut `age`, który jest aktualnym wiekiem wpisanym w `input`.

Komponent `AdultStuffBox` wyświetla "Lorem ipsum, treść dla pełnoletnich.". Jeżeli natomiast okaże się, że wartość przekazana w `props` jako `age` jest mniejsza niż 18, to blokuje swoje wyświetlanie.

Wyrenderuj i przetestuj swój komponent. Zauważ jak zachowują się aktualizacje, kiedy zmieniasz wiek.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 5

Stwórz komponent `DynamicLego`, który renderuje w elemencie `div` element `input type="number"`, który jest kontrolowanym elementem formularza, a użytkownik podaje w nim ilość klocków do wyświetlania.

Renderuje również element `ul`. W elemencie `ul` ma się znajdować dokładnie tyle elementów `li` ile aktualnie podał użytkownik w `input`. **Pamiętaj o wybraniu odpowiedniego klucza.**

Każdy element `li` ma mieć następujący styl:
- Kolor tła: czerwony,
- Wysokość: 50px,
- Szerokość: numer elementu * 50px (przykładowo pierwszy klocek będzie miał 50px, drugi 100px, trzeci 150px itd).

Wyrenderuj i przetestuj swój komponent. Zauważ jak zachowują się aktualizacje, kiedy zmieniasz liczbę elementów - czy działa to prawidłowo (nie ma niepotrzebnych aktualizacji)?

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 6

Stwórz komponent `Notes`. Ma on renderować w elemencie `div` elementy `textarea`, `button` oraz `span`.

`textarea` ma być kontrolowanym elementem formularza. Ma wyświetlać to co wpisuje użytkownik. Dodatkowo, treść wpisana przez użytkownika pokazuje się również w elemencie `span`.

Kliknięcie na `button` ma wyczyścić wpisywany tekst.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 7

Stwórz komponent `WhoIsPresent`. Ma on renderować w elemencie `div` elementy `select` oraz listę `ul`.

`ul` ma być na poczaku pusty.

`select` ma zawierać do wyboru pozycje z tej tablicy:

```JavaScript
['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa'];
```

Po wybraniu dowolnego elementu z `select` zostaje on przeniesiony do listy `ul`, tzn. pojawia się jako `li` w `ul`, natomiast przestaje być widoczny w elemencie `select`.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 8

Stwórz komponent `Advertisement`. Działa on tak, że wyświetla w swoim środku przekazaną do niego reklamę oraz na górze link `a` z napisem "Pokaż / schowaj reklamę".

Po kliknięciu na element `a` przełącza się: jeżeli reklama była widoczna (domyślnie) - chowa ją, w przeciwnim wypadku - pokazuje ją.

Napis na linku `a` powinien być zależny od sytuacji: gdy reklama jest widoczna - "Schowaj reklamę"; gdy nie jest widoczna - "Pokaż reklamę".

Wyrenderuj i przetestuj swój komponent, używając takiej konstrukcji:
```JSX
<Advertisement>
    <a href="http://coderslab.pl" target="_blank"><img src="http://coderslab.pl/wp-content/uploads/2016/10/cropped-logo-coderslab-favicon-192x192.png"></a>
</Advertisement>
```

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**