---
title: Utilizando tipos genéricos en C++
date: 2020-08-15 13:30:00
summary: En este artículo vemos como podemos hacer uso de los tipos genéricos en C++ utilizando templates tanto en la definición de clases como funciones.
tags: c++
---

## Tabla de contenidos:

<!-- toc -->

## Introducción

Como parte de mi proceso de formación como profesor de informática y programación, últimamente estoy tratando de abarcar diversos lenguajes de programación que no he tenido el gusto (o desgracia) de utilizar a lo largo de estos años desde que comencé a aprender a programar en la carrera. En la actualidad estoy tratando de comprender y aprender a utilizar el **lenguaje C++**, una tarea que, por ahora, no ha sido del todo satisfactoria debido a las singularidades que presenta este lenguaje, pese a tener actualmente (o eso creo) una base sólida tanto de Java como de C.

> **Disclaimer**: pese a no ser (al menos, por ahora) un gran fan de C++, creo que es interesante poder conocer diferentes lenguajes y aprender ideas de todos ellos, ya que cada uno enriquecerá, de una u otra forma, nuestro conocimiento. ¿Y qué mejor forma de aprender algo que escribiendo acerca de ello?

En este artículo de introducción hacemos **un pequeño repaso del uso de tipos genéricos en C++, tanto en la definición de funciones como en la definición de clases**.

Si quieres ver un **uso más avanzado y útil de los tipos genéricos**, mezclado con herencia y con un poco de algoritmia, no dejes de visitar el siguiente artículo que he escrito sobre [**algoritmos de ordenación con genéricos y herencia en C++**](/blog/algoritmos-ordenacion-genericos-herencia-c++).

## Tipos genéricos en C++

### ¿Qué son los tipos genéricos?

Antes de saber cómo aplicar y utilizar los tipos genéricos, es evidente que debemos entender **qué son los tipos genéricos** primero. 

> Los tipos genéricos permiten a un lenguaje de programación (normalmente un lenguaje compilado, ya que los lenguajes interpretados suelen ser **no tipados**) definir clases (en el caso de C++, también funciones aisladas) que podrán realizar su trabajo y ejecutar su código de forma independiente al tipo concreto que datos que se quiera utilizar en cada momento. 

Imaginemos que queremos definir una función que reciba por parámetro dos enteros, y que queremos que calcule el máximo de ambos y lo devuelva. Esto sería sencillo, ¿no? Imaginemos, ahora, que queremos también definir una función que reciba dos parámetros de tipo decimal (ej. *float*) y que calcule, también, su máximo. Sencillo, también. Pero... queremos otra para el tipo *double*. También otra para el tipo *string*. Se va "complicando", puesto que las funciones son muy sencillas, pero tenemos que definir una para cada tipo. Pues bien, **esto es precisamente lo que resuelven los tipos genéricos**.

De esta forma, bastaría con definir una función e indicarle que el tipo de los parámetros a recibir y el tipo de parámetro de retorno es de tipo genérico y listo.

<img src="../blog-imgs-test/genericos-c++.jpg" alt="Una función con tipos específicos y tipos genéricos" style="max-height: 40rem">

### *Function Templates* en C++

Pero, **para muestra, un botón**. Vamos a programar el anterior ejemplo en C++ utilizando tipos genéricos. En C++, para definir una función que acepte tipos genéricos, tenemos que definir, en realidad, una **function template** (literalmente, una plantilla de función). Es decir, una función que funcione como una plantilla para que el lenguaje pueda utilizar, en cada caso, el tipo necesario que se vaya a utilizar.

> Lo que hace en realidad el compilador de C++ es que **crea una función para cada tipo específico que se vaya a utilizar a lo largo de la ejecución del programa**, y utilizará en cada caso dicha definición concreta para ejecutar la lógica (y no la función genérica).

Para **definir una función como `template`**, simplemente anteponemos la siguiente sintaxis a la definición de la función:

```cpp
template <typename T>
```

o bien:

```cpp
template <class T>
```

Ambas sintaxis hacen exactamente lo mismo. En este caso, **estamos indicando que la función recibirá un tipo de parámetro genérico** identificado con la **letra `T`**.

El ejemplo prometido sería el siguiente:

```cpp
#include <iostream>
using namespace std;

template <typename T>
T genericMax( T e1, T e2 ){
    if( e1 > e2 ) return e1;
    return e2;
}

int main(){
    int e1 = 5, e2 = 10;
    int res1 = genericMax<int>( e1, e2 );
    cout << "El máximo de " << e1 << " y " << e2 << " es: " << res1 << endl;

    float f1 = 2.1, f2 = 0.5;
    float res2 = genericMax<float>( f1, f2 );
    cout << "El máximo de " << f1 << " y " << f2 << " es: " << res2 << endl;
}
```

Ejecución:

```
El máximo de 5 y 10 es: 10
El máximo de 2.1 y 0.5 es: 2.1
```

Podríamos utilizar el mismo código con los tipos `string`, `double`... y cualquier tipo específico que hayamos creado (por ejemplo, una clase propia) y para el cual hayamos [sobrecargado los operadores de comparación](https://www.codingunit.com/cplusplus-binary-operator-overloading-greater-or-less-than).

En realidad, en la llamada a la función no es necesario especificar el tipo concreto con la sintaxis `<int>` (o `<float>`)..., ya que el compilador es capaz de inferir el tipo en base al tipo concreto recibido por parámetro.

Es decir, que esto:
```cpp
int e1 = 5, e2 = 10;
int res1 = genericMax<int>( e1, e2 );
```

podría simplificarse perfectamente por esto:
```cpp
int e1 = 5, e2 = 10;
int res1 = genericMax( e1, e2 );
```

### *Class Templates* en C++

Todos los anteriores conceptos pueden aplicarse también para la **definición de clases que utilizan tipos genéricos** en C++. En este caso, **añadiremos un poco de dificultad**: utilizaremos dos tipos en lugar de uno, con el objetivo de poder comparar, también, elementos de tipo diferente.

Lo veremos directamente con un ejemplo. Imaginemos que queremos definir una nueva clase que implemente funciones matemáticas, pero queremos que pueda utilizarse indistintamente para los tipos `int`, `float` y `double`, y que puedan compararse y aplicarse las funciones entre ellos.

En este caso, los nombres escogidos para los tipos genéricos serán `T` y `U`. Implementaremos algunas funciones para poder ver la utilidad de esto:

```cpp
#include <iostream>
using namespace std;

template <typename T, typename U>
class MiMatematica {
    public:
        T max( T e1, U e2 ) {
            if( e1 > e2 ) return e1;
            return e2;
        }

        T min( T e1, U e2 ) {
            if( e1 < e2 ) return e1;
            return e2;
        }
};

int main(){
    MiMatematica<float,int> matematica;
    float f1 = 5.3;
    int e1 = 3;
    float res = matematica.min( f1, e1 );
    cout << "El menor de " << f1 << " y " << e1 << " es: " << res << endl;
}
```

Quizá el ejemplo es un poco raro, porque al definir las funciones de mínimo y máximo entre dos tipos diferentes, ¿de qué tipo decidimos que tiene que ser el valor de retorno, del tipo del primer elemento, del tipo del segundo...? De cualquier manera, **espero que se entienda la idea de la potencia que nos brinda la utilización de tipos genéricos** en las clases y funciones que definamos, ya que de esta forma **evitamos duplicar gran cantidad de código y, por tanto, introducir bugs**, entre otras muchas ventajas.

## Conclusión

Como conclusión simplemente decir que espero que esta pequeña aportación haya sido de utilidad a alguien, y recordaos que, si queréis ver un **uso más avanzado de los tipos genéricos en C++**, no dejéis de visitar mi artículo [**algoritmos de ordenación con genéricos y herencia en C++**](/blog/algoritmos-ordenacion-genericos-herencia-c++).

¡Saludos y buen día (o noche) a todos!

***David***.