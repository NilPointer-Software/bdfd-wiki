for file in /*.tar.gz
    do tar xzf "$file" -C /usr/local/bin
    rm $file
done

mdbook-admonish install --css-dir src/theme
mdbook serve --port 3000 -n 0.0.0.0
