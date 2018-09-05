<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>SSR</title>
</head>

<body>

    <main>
        <h1>Server Side Renderering with PHP and JS</h1>
        <p>Proof of concept and boilerplate of Server Side Rendering of ReactJS application inside templates files from PHP.</p>
        <div id="app"><?php JSServer::render(); ?></div>
    </main>

    <script type="text/javascript" src="/dist/app.js"></script>
    
</body>

</html>