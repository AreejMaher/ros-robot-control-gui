# ros-robot-control-gui
A multiplayer battle royale game in ROS1 using Turtlesim. Each player controls a turtle, competing with movement, attacks, and health management.
# ROS Turtlesim: Batman's Ninja Turtles Battle Royale

A multiplayer turtle battle game built with ROS1 and Turtlesim, where each player controls a turtle using predefined keys for movement and attacks. The system includes a game engine to manage state, control turtle actions, and handle combat, with the goal of being the last turtle standing.

## ✨ Key Features

* **Multiplayer Control:** Allows multiple turtles to be controlled simultaneously using keyboard inputs.
* **Game Engine Node:** Manages the overall game state, tracking the health and attack counts of each turtle.
* **Combat System:** Turtles can attack others within a specified radius, inflicting damage and reducing their own available attacks.
* **Health Management:** Each turtle starts with 100 health points and is removed from the game if its health drops to 0.
* **Game Over Logic:** The game ends when all turtles have exhausted their 10 attacks, and the winner is the turtle with the highest remaining health.

## 🛠️ Tech Stack

* **Framework:** ROS1
* **Simulation:** Turtlesim
* **Language:** Python

## 🚀 How to Run the Game

1.  **Clone the Repository:**
    Clone this repository into the `src` folder of your Catkin workspace.
    ```bash
    git clone [https://github.com/AreejMaher/ros-turtlesim-combat-game.git](https://github.com/AreejMaher/ros-turtlesim-combat-game.git)
    ```

2.  **Build the Workspace:**
    Navigate to the root of your Catkin workspace and build the package.
    ```bash
    catkin_make
    ```

3.  **Source the Workspace:**
    Source the new `setup.bash` file to make the nodes available.
    ```bash
    source devel/setup.bash
    ```

4.  **Run the Game:**
    Use `roslaunch` to start the game. This will open the Turtlesim window and spawn the turtles.
    ```bash
    roslaunch my_turtle_fight turtle_fight.launch
    ```

5.  **Control the Turtles:**
    * Open a new terminal for each turtle you want to control.
    * Run the keyboard control node for each one.
    * **Turtle 1:** `rosrun my_turtle_fight keyboard.py __ns:=/turtle1`
    * **Turtle 2:** `rosrun my_turtle_fight keyboard.py __ns:=/turtle2`
    * (Repeat for other turtles, changing the namespace accordingly).
