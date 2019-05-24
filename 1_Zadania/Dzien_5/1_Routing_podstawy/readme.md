# Podstawowy routing &ndash; zadania

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

### Zagnieżdżone ścieżki (~ 10min - 20min)

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Main`, w którym jest `h1` z napisem "Witaj na stronie";
- `/about/us` - ścieżka renderuje komponent `AboutUs`, w którym jest `p` z napisem "Trochę więcej o nas...";
- `/about/company` - ścieżka renderuje komponent `AboutCompany`, w którym jest `p` z napisem "Trochę więcej na temat firmy...".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i treść renderowaną przez dzieci.
 
Dodatkowo, ścieżki zaczynające się od `/about` mają dodatkowy, własny szablon, który zawiera w `div` element `h2` z napisem "O nas" i treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min - 20min)

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Home`, w którym jest `h1` z napisem "Witaj na stronie";
- `/blog` - ścieżka renderuje komponent `Blog`, w którym jest `h1` z napisem "Blog";
- `/pricing` - ścieżka renderuje komponent `Pricing`, w którym jest `h1` z napisem "Cennik".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i element `ul` z linkami do każdej z podstron oraz treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.
