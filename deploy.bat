@echo off
set fecha=%date%
echo 🚀 Subiendo cambios del %fecha% a Vercel...
git add .
git commit -m "Actualización del %fecha%"
git push
echo ✅ Listo. Tu sitio se actualizará en Vercel en unos segundos.
pause

