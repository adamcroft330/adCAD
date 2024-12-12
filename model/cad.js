module.exports = {
    generate: () => {
        const baseHeight = 1;
        const baseRadius = 1.5;
        const armLength1 = 3;
        const armLength2 = 2.5;
        const jointRadius = 0.5;
        const handLength = 1;


        const vertices = [
            // Base (Cylinder)
            0, 0, 0, //0
            0, baseHeight, 0, //1
            baseRadius, 0, 0, //2
            baseRadius, baseHeight, 0, //3
            0, 0, baseRadius, //4
            0, baseHeight, baseRadius, //5
            -baseRadius, 0, 0, //6
            -baseRadius, baseHeight, 0, //7
            0, 0, -baseRadius, //8
            0, baseHeight, -baseRadius, //9
              //Joint 1
           0, baseHeight, 0,  //10
           0, baseHeight + jointRadius, 0,  //11
           jointRadius, baseHeight, 0, //12
           jointRadius, baseHeight+ jointRadius, 0,  //13
           0, baseHeight, jointRadius, //14
           0, baseHeight + jointRadius, jointRadius, //15
           -jointRadius, baseHeight, 0, //16
           -jointRadius, baseHeight+ jointRadius, 0, //17
           0, baseHeight, -jointRadius, //18
           0, baseHeight+ jointRadius, -jointRadius, //19
              // Arm 1
            0, baseHeight + jointRadius, 0, //20
            0, baseHeight + jointRadius, armLength1, //21
            jointRadius, baseHeight + jointRadius, 0, //22
            jointRadius, baseHeight + jointRadius, armLength1, //23
            0, baseHeight + jointRadius + jointRadius, 0, //24
            0, baseHeight + jointRadius + jointRadius, armLength1, //25
             -jointRadius, baseHeight + jointRadius, 0, //26
            -jointRadius, baseHeight + jointRadius, armLength1, //27
              // Joint 2
           0, baseHeight + jointRadius, armLength1, //28
           0, baseHeight + jointRadius + jointRadius, armLength1, //29
           jointRadius, baseHeight + jointRadius, armLength1, //30
           jointRadius, baseHeight + jointRadius + jointRadius, armLength1, //31
           0, baseHeight + jointRadius, armLength1 + jointRadius, //32
           0, baseHeight + jointRadius + jointRadius, armLength1 + jointRadius, //33
           -jointRadius, baseHeight + jointRadius, armLength1, //34
           -jointRadius, baseHeight + jointRadius + jointRadius, armLength1, //35
           0, baseHeight + jointRadius, armLength1 -jointRadius, //36
           0, baseHeight + jointRadius + jointRadius, armLength1 -jointRadius, //37
              // Arm 2
            0, baseHeight + jointRadius, armLength1 + jointRadius, //38
            0, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //39
             jointRadius, baseHeight + jointRadius, armLength1 + jointRadius, //40
            jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //41
            0, baseHeight + jointRadius + jointRadius, armLength1 + jointRadius, //42
            0, baseHeight + jointRadius + jointRadius, armLength1 + jointRadius + armLength2, //43
             -jointRadius, baseHeight + jointRadius, armLength1 + jointRadius, //44
             -jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //45
              // Hand
             0, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //46
             0, baseHeight + jointRadius, armLength1 + jointRadius + armLength2 + handLength, //47
             jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //48
             jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2 + handLength, //49
              -jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2, //50
              -jointRadius, baseHeight + jointRadius, armLength1 + jointRadius + armLength2+ handLength, //51
              0, baseHeight + jointRadius+ jointRadius, armLength1 + jointRadius + armLength2, //52
               0, baseHeight + jointRadius+ jointRadius, armLength1 + jointRadius + armLength2 + handLength, //53
        ];

          const normals = [
              //Base
            0, -1, 0,
            0, 1, 0,
            1, 0, 0,
            1, 0, 0,
            0, 0, 1,
            0, 0, 1,
            -1, 0, 0,
            -1, 0, 0,
            0, 0, -1,
            0, 0, -1,
             //Joint 1
             0, -1, 0,
             0, 1, 0,
             1, 0, 0,
            1, 0, 0,
            0, 0, 1,
            0, 0, 1,
            -1, 0, 0,
            -1, 0, 0,
            0, 0, -1,
            0, 0, -1,
            //Arm 1
            0, 1, 0,
            0, 1, 0,
             1, 0, 0,
            1, 0, 0,
             0, 1, 0,
             0, 1, 0,
             -1, 0, 0,
            -1, 0, 0,
            // Joint 2
            0, -1, 0,
            0, 1, 0,
             1, 0, 0,
            1, 0, 0,
            0, 0, 1,
            0, 0, 1,
            -1, 0, 0,
             -1, 0, 0,
            0, 0, -1,
             0, 0, -1,
            // Arm 2
             0, 1, 0,
            0, 1, 0,
             1, 0, 0,
            1, 0, 0,
             0, 1, 0,
             0, 1, 0,
             -1, 0, 0,
            -1, 0, 0,
             //Hand
            0, 1, 0,
            0, 1, 0,
             1, 0, 0,
            1, 0, 0,
             -1, 0, 0,
              -1, 0, 0,
              0, 1, 0,
              0, 1, 0
        ];


        const indices = [

            0, 1, 2, 2, 1, 3,
            0, 4, 1, 4, 5, 1,
            4, 0, 6, 4, 6, 7,
            6, 0, 8, 6, 8, 9,
              //Joint 1
             10, 11, 12, 12, 11, 13,
             10, 14, 11, 14, 15, 11,
             14, 10, 16, 14, 16, 17,
              16, 10, 18, 16, 18, 19,
            //Arm 1
            20, 21, 22, 22, 21, 23,
            20, 24, 21, 24, 25, 21,
            24, 20, 26, 24, 26, 27,
              //Joint 2
            28, 29, 30, 30, 29, 31,
            28, 32, 29, 32, 33, 29,
            32, 28, 34, 32, 34, 35,
             34, 28, 36, 34, 36, 37,
            //Arm 2
             38, 39, 40, 40, 39, 41,
             38, 42, 39, 42, 43, 39,
              42, 38, 44, 42, 44, 45,
            //Hand
             46, 47, 48, 48, 47, 49,
             46, 50, 47, 50, 51, 47,
             46, 52, 47, 52, 53, 47
        ];
        return { vertices, normals, indices };
    },
};
