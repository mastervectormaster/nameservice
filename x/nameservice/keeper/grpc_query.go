package keeper

import (
	"github.com/mastervectormaster/nameservice/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
