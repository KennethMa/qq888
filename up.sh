function sshfn {
  echo '更新分支：' $1
  ssh root@47.90.102.192  "cd /data/qq888/;git checkout" $1 ";git pull origin" $1";yarn install;yarn run build;pm2 reload qq888"
}

if [ x$1 != x ]
then
  sshfn $1
else
  sshfn $(git symbolic-ref --short HEAD)
fi
