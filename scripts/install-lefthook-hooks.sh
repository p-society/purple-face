#!/bin/sh
HOOKS=".git/hooks"
echo '#!/bin/sh
pnpx lefthook install' > $HOOKS/post-merge
echo '#!/bin/sh
pnpx lefthook install' > $HOOKS/post-checkout
chmod +x $HOOKS/post-merge $HOOKS/post-checkout