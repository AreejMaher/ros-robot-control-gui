<<<<<<< HEAD
# ROS Robot Control GUI

A web-based graphical user interface for controlling and monitoring a ROS-enabled robot. The frontend is built with Svelte and communicates with the ROS backend via the rosbridge WebSocket server.


## ✨ Key Features

* **Real-time PID Tuning:** A dedicated interface to adjust PID gains on the fly and see the immediate effect on motor performance.
* **Live Sensor Monitoring:** Visualize data from various robot sensors in real-time to diagnose and track robot status.
* **Direct Motion Control:** A simple interface to control the robot's movement for testing and operation.
* **Circuit Breaker Management:** Monitor and control the state of the robot's circuit breakers directly from the UI.

## 🛠️ Tech Stack

* **Frontend:** Svelte, HTML/CSS, JavaScript
* **Backend/Robotics:** ROS1, Python
* **Communication:** rosbridge

## 🚀 How to Run the GUI

To run this project, you need to launch both the ROS backend nodes and the web-based frontend.

### 1. Prerequisites
* A working ROS1 installation with `rosbridge_server` installed (`sudo apt-get install ros-rosbridge-suite`).
* Node.js and npm installed to run the Svelte application.

### 2. Run the ROS Backend
In a terminal, launch the necessary ROS nodes. This includes `roscore`, your robot's driver nodes, and the rosbridge server.

```bash
# Start ROS Master
roscore
```

```bash
# In a new terminal, launch rosbridge
roslaunch rosbridge_server rosbridge_websocket.launch
```

```bash
# In other terminals, launch your robot's specific nodes...
```

### 3. Run the Svelte Frontend
Navigate to the `GUI_Page` directory and run the following commands:

```bash
# Install project dependencies
npm install
```

```bash
# Start the development server
npm run dev
```
=======
# ros-robot-control-gui
A multiplayer battle royale game in ROS1 using Turtlesim. Each player controls a turtle, competing with movement, attacks, and health management.

>>>>>>> fcafe33e6b798f589beece1875d4378989fd6b34
