# **Weather Map App**

## 🔹 **Overview**
This is a simple **React application** that displays weather data for different locations on a map using **React Leaflet**. Users can interact with the map by clicking on a location or searching for a city to view relevant weather details fetched from the **OpenWeatherMap API**.

## 🔹 **Screenshot**
✔️ MAKE SURE YOU CLICK THE MARKER ICON TO GET WEATHER INFORMATION.✔️
 ![image alt](https://github.com/SiyaCodez/weather-application/blob/4ed496fae6d014bd456508a56c4fc0945377b1c3/Screenshot.PNG)

---

## 🔹 **How to Set Up and Run the Project Locally**

### **📌 Prerequisites**
Ensure you have the following installed on your machine:
- **[Node.js](https://nodejs.org/)** (v14 or later recommended)
- **npm** (comes with Node.js) or **Yarn**

### **📌 Installation Steps**
1. **Clone the repository**
   ```bash
   git clone https://github.com/SiyaCodez/weather-application.git
   cd weather-app
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm start
   ```
   The app should open at **http://localhost:3000/** in your browser.

---

## 🔹 **Libraries and Tools Used**

| **Library/Tool**      | **Purpose**                                      |
|----------------------|-------------------------------------------------|
| **React**           | Frontend JavaScript library                      |
| **React Leaflet**   | Interactive maps in React                        |
| **Leaflet**         | Core mapping library                             |
| **Axios**           | Fetching weather data from OpenWeatherMap        |
| **OpenWeatherMap API** | Provides weather data                        |
| **CSS**        | Styling                                          |

---

## 🔹 **Assumptions Made During Development**
✔ Users will search for their certain city and if it's not available the app will display **City not found. Try another city.**
✔ The **OpenWeatherMap API** will provide accurate and up-to-date weather information.
✔ Users will click valid locations on the map to retrieve weather details.
✔ If the API fails, the app will display a **user-friendly error message**.

---

## 🔹 **Features**
✅ **Interactive map** using **React Leaflet**.
✅ Fetches **real-time weather data** from OpenWeatherMap API.
✅ Allows users to **click on the map** or **search for a city**.
✅ Displays **temperature, weather condition, humidity, and wind speed**.
✅ **Dark mode toggle** for better user experience.

---

## 🔹 **Author**
Developed by **SiyaCodez** @https://siyacodez.github.io/ 🚀

