# VEGA TRADING PROTOCOL - TRADING AND ORDER MANAGEMENT - UI
This connects to the Vega protocol, and provides live trading and order management functionalities.

![](https://j.gifs.com/oVr0ON.gif)
 
### Monitor
1. Display a list of the markets that a trader has an open position or active order/s on. [IMPLEMENTED]
2. Display relevant market information for that market such as: last traded price, last traded volume, best bid, best ask, bid/ask spread, open interest, 24hr % price move. [IMPLEMENTED]
3. Display relevant position information for that trader’s position on that market such as: open position volume, position entry price (volume weighted), active buy orders (total volume), active sell orders (total volume), margin deployed, margin zone, their proportion of the open interest (open position size on a market / total market open interest).  [IMPLEMENTED] (Remaining - proportion of the open interest)

### Position Management
1. Allow traders to cancel all orders on a market with one click.  [IMPLEMENTED]
2. Allow traders to exit all open positions on a market with one click. [IMPLEMENTED]
3. Allow traders to cancel all orders and exit all positions on a market with one click.  [IMPLEMENTED]
4. Allow traders to cancel all orders and exit all positions on all markets with one click.  [IMPLEMENTED]

### Alerts
1. For large price movements in markets that the trader has an open position or active orders on. [NOT IMPLEMENTED]
2. When a trader’s deployed margin drops below the “search margin level” alert the trader that they may be liquidated.[IMPLEMENTED]
3. Alert the trader when they have been liquidated. [IMPLEMENTED]
4. Alert the trader when their open position exceeds a (customisable) proportion of the total market’s open interest. [NOT IMPLEMENTED]

### Trade and/or price visualisation
1. Visualisations or charts. [NOT IMPLEMENTED (TradingView widget added and code attached)]
2. Trade tickers (Time and Sales) for the markets.[IMPLEMENTED]

### Ability to place an order
1. Select a market [IMPLEMENTED]
2. Choose a trade size [IMPLEMENTED]
3. Place a buy or market sell order [IMPLEMENTED]
4. Optionally allow configuring order type and price / time in force [IMPLEMENTED] (LIMIT/GTT has not been implemented)

YouTube Video Link - 

<p align="center">
   <a target="_blank" href="https://www.youtube.com/watch?v=r00ynVCG4Jc">
    <img src="https://user-images.githubusercontent.com/53361416/87871239-55e7fe00-c9cc-11ea-9a5a-a49b45865933.png" />
   </a>
</p>

For Running UI Locally...
  ```sh
$ git clone https://github.com/cryptowhaler/VegaTradingApp-UI
$ npm install
$ npm run serve
```
Within the terminal you will be given a link http://localhost.... open the link and trade

For Production Build...
  ```sh
$ npm run build
```
A new 'dist' folder will be created, which is to be used for deployment.
