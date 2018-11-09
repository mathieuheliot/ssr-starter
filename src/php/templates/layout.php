<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>SSR</title>
</head>

<body>
    <div class="app app--php">

        <header>
            <h1>Catalogue</h1>
        </header>

        <main>
            <p>Server Side Renderering with PHP and JS</p>
            <p>Proof of concept and boilerplate of Server Side Rendering of ReactJS application inside templates files from PHP.</p>

            <div class="app app-js">
                <div id="app"><?php JSServer::render(); ?></div>
            </div>
        </main>

        <footer>
            <p>Made with ❤️ by Mathieu Héliot</p>
        </footer>

    </div>

    <script type="text/javascript" src="/dist/app.js"></script>
    
</body>

</html>